import cv2
import numpy as np
import logging

# Set up logging
logging.basicConfig(level=logging.INFO, 
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger('color_quantization')

def ensure_bgr_image(img):
    """
    Ensures an image is in BGR format.
    
    Parameters:
    - img: Input image
    
    Returns:
    - BGR image
    """
    if img is None:
        logger.error("Input image is None")
        raise ValueError("Input image is None")
        
    logger.debug(f"Input image shape: {img.shape}, dtype: {img.dtype}")
    
    # Handle grayscale images
    if len(img.shape) == 2:
        logger.info("Converting grayscale image to BGR")
        return cv2.cvtColor(img, cv2.COLOR_GRAY2BGR)
        
    # Handle RGBA images
    if len(img.shape) == 3 and img.shape[2] == 4:
        logger.info("Converting RGBA image to BGR")
        return cv2.cvtColor(img, cv2.COLOR_BGRA2BGR)
        
    # Handle RGB images
    if len(img.shape) == 3 and img.shape[2] == 3:
        logger.debug("Image is already in BGR format")
        return img
        
    logger.error(f"Unexpected image format with shape {img.shape}")
    raise ValueError(f"Unexpected image format with shape {img.shape}")

def sample_image_pixels(img, max_samples=10000):
    """
    Samples pixels from an image for faster analysis.
    
    Parameters:
    - img: Input BGR image
    - max_samples: Maximum number of samples to take
    
    Returns:
    - Sampled pixels as float32 array with shape (n_samples, 3)
    """
    if img is None:
        logger.error("Input image is None")
        raise ValueError("Input image is None")
        
    try:
        # Reshape image to a list of pixels
        height, width = img.shape[:2]
        total_pixels = height * width
        pixels = img.reshape(-1, 3)
        
        logger.debug(f"Image reshaped to {pixels.shape} pixels")
        
        # Sample pixels if needed
        if total_pixels > max_samples:
            logger.info(f"Sampling {max_samples} pixels from {total_pixels} total")
            indices = np.random.choice(pixels.shape[0], max_samples, replace=False)
            pixels = pixels[indices]
        
        # Ensure float32 type for kmeans
        pixels = pixels.astype(np.float32)
        logger.debug(f"Pixel array shape: {pixels.shape}, dtype: {pixels.dtype}")
        
        return pixels
        
    except Exception as e:
        logger.error(f"Error sampling image pixels: {str(e)}")
        raise ValueError(f"Error sampling image pixels: {str(e)}")

def count_unique_colors(pixels, tolerance=25):
    """
    Counts approximate number of unique colors in pixel array.
    
    Parameters:
    - pixels: Pixel array with shape (n_pixels, 3)
    - tolerance: Color binning tolerance (higher = fewer unique colors)
    
    Returns:
    - Number of unique colors
    """
    try:
        # Round colors to reduce sensitivity to minor variations
        rounded_colors = np.round(pixels / tolerance) * tolerance
        unique_colors = np.unique(rounded_colors, axis=0)
        count = unique_colors.shape[0]
        
        logger.info(f"Found approximately {count} unique colors (tolerance={tolerance})")
        return count
        
    except Exception as e:
        logger.error(f"Error counting unique colors: {str(e)}")
        logger.warning("Returning default of 8 unique colors")
        return 8  # Safe default

def determine_optimal_clusters(img, min_clusters=4, max_clusters=16):
    """
    Determines the optimal number of color clusters in an image.
    
    Parameters:
    - img: Input BGR image
    - min_clusters: Minimum number of clusters to use
    - max_clusters: Maximum number of clusters to consider
    
    Returns:
    - optimal_k: Optimal number of color clusters (always >= min_clusters)
    """
    try:
        # Sample pixels
        pixels = sample_image_pixels(img)
        
        # Calculate color variance
        color_variance = np.var(pixels, axis=0).sum()
        logger.info(f"Color variance: {color_variance:.2f}")
        
        # Count approximate unique colors
        unique_colors = count_unique_colors(pixels)
        
        # Determine optimal cluster count based on image characteristics
        if unique_colors < 8 or color_variance < 1000:
            k = min(unique_colors + 2, 8)
            logger.info(f"Low color variation: using {k} clusters")
        elif unique_colors < 16 or color_variance < 5000:
            k = 8
            logger.info(f"Medium color variation: using {k} clusters")
        else:
            k = 12
            logger.info(f"High color variation: using {k} clusters")
        
        # Enforce min/max constraints
        k = max(min_clusters, min(k, max_clusters, unique_colors + 4))
        logger.info(f"Final cluster count: {k}")
        
        return k
        
    except Exception as e:
        logger.error(f"Error determining optimal clusters: {str(e)}")
        logger.warning(f"Using default of {min_clusters} clusters")
        return min_clusters  # Safe default

def apply_kmeans_clustering(pixels, k):
    """
    Applies k-means clustering to pixels.
    
    Parameters:
    - pixels: Pixel array with shape (n_pixels, 3) in float32 format
    - k: Number of clusters
    
    Returns:
    - labels: Cluster labels for each pixel
    - centers: Cluster centers (colors)
    """
    if k <= 0:
        logger.error(f"Invalid k value: {k}")
        raise ValueError(f"K must be positive, got {k}")
        
    logger.info(f"Applying k-means with k={k}")
    
    try:
        # Define criteria and apply K-means
        criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 100, 0.2)
        _, labels, centers = cv2.kmeans(pixels, k, None, criteria, 10, cv2.KMEANS_PP_CENTERS)
        
        # Check for empty clusters
        cluster_counts = np.bincount(labels.flatten(), minlength=k)
        empty_clusters = np.sum(cluster_counts == 0)
        
        if empty_clusters > 0:
            logger.warning(f"Found {empty_clusters} empty clusters")
            
            # Keep only non-empty clusters
            valid_clusters = np.where(cluster_counts > 0)[0]
            centers = centers[valid_clusters]
            
            # Remap labels
            new_labels = np.zeros_like(labels)
            for i, cluster_idx in enumerate(valid_clusters):
                new_labels[labels == cluster_idx] = i
            labels = new_labels
            
            logger.info(f"Remapped to {len(valid_clusters)} valid clusters")
        
        return labels, centers
        
    except Exception as e:
        logger.error(f"Error in k-means clustering: {str(e)}")
        raise ValueError(f"K-means clustering failed: {str(e)}")

def reconstruct_quantized_image(img, labels, centers):
    """
    Reconstructs a quantized image from labels and centers.
    
    Parameters:
    - img: Original image (for shape reference)
    - labels: Cluster labels for each pixel
    - centers: Cluster centers (colors)
    
    Returns:
    - quantized_img: Image with reduced color palette
    """
    try:
        # Convert centers to uint8
        centers = np.uint8(centers)
        
        # Reshape labels to match original image
        height, width = img.shape[:2]
        labels_2d = labels.reshape(height, width)
        
        # Create quantized image
        quantized_img = np.zeros((height, width, 3), dtype=np.uint8)
        
        # Fill each pixel with its cluster center color
        for i in range(len(centers)):
            quantized_img[labels_2d == i] = centers[i]
            
        logger.debug(f"Reconstructed quantized image with shape {quantized_img.shape}")
        return quantized_img
        
    except Exception as e:
        logger.error(f"Error reconstructing quantized image: {str(e)}")
        logger.warning("Returning original image as fallback")
        return img.copy()  # Safe fallback

def quantize_colors(img, min_clusters=4, max_clusters=16):
    """
    Main function for color quantization.
    
    Parameters:
    - img: Input image (any format)
    - min_clusters: Minimum number of clusters
    - max_clusters: Maximum number of clusters
    
    Returns:
    - quantized_img: Image with reduced color palette
    - colors: Array of dominant colors (BGR format)
    - labels: Pixel labels mapping to colors (2D array)
    """
    logger.info("Starting color quantization")
    
    try:
        # Ensure BGR format
        bgr_img = ensure_bgr_image(img)
        
        # Get image dimensions
        height, width = bgr_img.shape[:2]
        logger.info(f"Processing image with dimensions {width}x{height}")
        
        # Reshape for k-means
        pixels = bgr_img.reshape(-1, 3).astype(np.float32)
        
        # Determine optimal cluster count
        k = determine_optimal_clusters(bgr_img, min_clusters, max_clusters)
        
        # Apply k-means clustering
        labels, centers = apply_kmeans_clustering(pixels, k)
        
        # Reconstruct quantized image
        quantized_img = reconstruct_quantized_image(bgr_img, labels, centers)
        
        # Reshape labels to 2D for mask creation
        labels_2d = labels.reshape(height, width)
        
        logger.info(f"Color quantization complete with {len(centers)} colors")
        return quantized_img, centers, labels_2d
        
    except Exception as e:
        logger.error(f"Color quantization failed: {str(e)}")
        
        # Create a simple fallback with just a few colors
        logger.warning("Using fallback color quantization")
        
        try:
            # Ensure BGR format
            bgr_img = ensure_bgr_image(img)
            height, width = bgr_img.shape[:2]
            
            # Create a simplified version with just a few colors
            # This avoids complex algorithms that might fail
            quantized = cv2.pyrMeanShiftFiltering(bgr_img, 30, 50)
            
            # Extract a few dominant colors (up to 8)
            pixels = quantized.reshape(-1, 3).astype(np.float32)
            criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 100, 0.2)
            k = min(8, height * width // 1000)  # Simple heuristic
            _, labels, centers = cv2.kmeans(pixels, k, None, criteria, 1, cv2.KMEANS_RANDOM_CENTERS)
            
            # Create quantized image and reshape labels
            quantized_img = reconstruct_quantized_image(bgr_img, labels, centers)
            labels_2d = labels.reshape(height, width)
            
            logger.info(f"Fallback quantization complete with {len(centers)} colors")
            return quantized_img, centers, labels_2d
            
        except Exception as e2:
            # If even the fallback fails, return a grayscale version
            logger.error(f"Fallback quantization also failed: {str(e2)}")
            logger.warning("Using extreme fallback (grayscale)")
            
            gray = cv2.cvtColor(bgr_img, cv2.COLOR_BGR2GRAY)
            binary = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY)[1]
            
            # Create a binary result with just black and white
            height, width = bgr_img.shape[:2]
            labels_2d = (binary > 0).astype(np.int32)
            centers = np.array([[0, 0, 0], [255, 255, 255]], dtype=np.uint8)
            
            # Create a fake quantized image from binary
            quantized_img = np.zeros_like(bgr_img)
            quantized_img[binary > 0] = [255, 255, 255]
            
            return quantized_img, centers, labels_2d

from __future__ import annotations
from typing import TypeVar, List, Callable, Iterator, Optional, Generic, cast
from abc import ABC

# Forward declaration - will be defined fully elsewhere
class Element(ABC):
    pass

# Type variable with constraint to Element or its subclasses
T = TypeVar('T', bound=Element)

class ElementCollection(Generic[T]):
    """
    An immutable collection of elements with deferred modifications.
    Tracks parent relationships and ensures only elements with the correct parent can be added.
    """

    def __init__(self, parent: Element):
        """Initialize the collection with a parent. Elements are empty initially."""
        self._parent = parent
        self._elements: List[T] = []
        self._transforms: List[Callable[[List[T]], List[T]]] = []
        self._dirty = False

    @property
    def parent(self) -> Element:
        """The parent element that owns this collection."""
        return self._parent

    @property
    def _dirty(self) -> bool:
        """Indicates whether there are pending updates in this collection."""
        return self.__dirty

    @_dirty.setter
    def _dirty(self, value: bool) -> None:
        """
        Set the dirty flag here and on the parent Element if supported.
        Propagates the dirty flag up the parent chain.
        """
        self.__dirty = value
        # If parent has a _dirty property, set it too
        if hasattr(self._parent, '_dirty'):
            setattr(self._parent, '_dirty', value)

    def __iter__(self) -> Iterator[T]:
        """Allows iteration over elements."""
        return iter(self._elements)

    def __len__(self) -> int:
        """Returns the number of elements in the collection."""
        return len(self._elements)

    def __getitem__(self, index: int) -> T:
        """Allows indexing into the collection."""
        return self._elements[index]

    def add(self, element: T) -> None:
        """
        Adds an element transformation function that will be applied during update.
        """
        # Validate that the element is the correct type
        if not isinstance(element, Element):
            raise TypeError(f"Expected Element type, got {type(element)}")
            
        # Add transformation to append the element
        def add_transform(elements: List[T]) -> List[T]:
            return elements + [element]
            
        self._transforms.append(add_transform)
        self._dirty = True

    def remove(self, element: T) -> None:
        """
        Adds a remove transformation function that will be applied during update.
        """
        # Add transformation to filter out the element
        def remove_transform(elements: List[T]) -> List[T]:
            return [e for e in elements if e is not element]
            
        self._transforms.append(remove_transform)
        self._dirty = True

    def replace(self, index: int, element: T) -> None:
        """
        Adds a replacement transformation function that will be applied during update.
        """
        # Validate that the element is the correct type
        if not isinstance(element, Element):
            raise TypeError(f"Expected Element type, got {type(element)}")
            
        # Add transformation to replace element at index
        def replace_transform(elements: List[T]) -> List[T]:
            result = elements.copy()
            if 0 <= index < len(result):
                result[index] = element
            return result
            
        self._transforms.append(replace_transform)
        self._dirty = True

    def move(self, old_index: int, new_index: int) -> None:
        """
        Adds a move transformation function that will be applied during update.
        """
        # Add transformation to move element from old_index to new_index
        def move_transform(elements: List[T]) -> List[T]:
            result = elements.copy()
            if 0 <= old_index < len(result) and 0 <= new_index < len(result):
                element = result.pop(old_index)
                result.insert(new_index, element)
            return result
            
        self._transforms.append(move_transform)
        self._dirty = True

    def clear(self) -> None:
        """
        Adds a clear transformation function that will be applied during update.
        """
        # Add transformation to clear all elements
        def clear_transform(_: List[T]) -> List[T]:
            return []
            
        self._transforms.append(clear_transform)
        self._dirty = True

    def update(self, new_parent: Element) -> ElementCollection[T]:
        """
        Return a new collection with all pending changes applied.
        If no changes exist, return itself.
        The new parent is required since this update is triggered from the parent.
        """
        # If not dirty, no need to create a new collection
        if not self._dirty:
            return self
            
        # Create new collection with new parent
        new_collection = ElementCollection[T](new_parent)
        
        # Start with current elements
        current_elements = self._elements.copy()
        
        # Apply all transformation functions in sequence
        for transform in self._transforms:
            current_elements = transform(current_elements)
            
        # Set the new elements list
        new_collection._elements = current_elements
        
        # Return the new collection with all changes applied
        return new_collection

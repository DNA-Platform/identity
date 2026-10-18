from __future__ import annotations
from abc import ABC, abstractmethod
from typing import List, Union, Optional, TypeVar, Callable, Dict, Any, cast
from copy import copy

# Forward declaration of Attribute class
class Attribute(ABC):
    pass

# Type variable for self-referencing in methods
T = TypeVar('T', bound='Element')

# Define our Content type
Content = Union[List['Element'], 'Element', str, None]

class Element(ABC):
    """Base class for all SVG elements. Immutable once created."""

    def __init__(
        self,
        parent: Optional[Element] = None,
        attributes: List[Attribute] = [], 
        content: Content = None,
        annotation: Optional[List[Element]] = None,
    ):
        """
        Initialize an immutable element with attributes, content, and annotation.
        Parent must always be provided.
        """
        self._parent = parent
        self._content = content
        self._dirty = False
        self._transforms: List[Callable[[Element], Dict[str, Any]]] = []
        
        # Create ElementCollection instances for attributes and annotations
        from element_collection import ElementCollection
        
        # Initialize collections with provided lists
        self._attributes = ElementCollection[Attribute](self, attributes)
        self._annotation = ElementCollection[Element](self, annotation or [])

    @property
    def parent(self) -> Optional[Element]:
        """Return the parent element."""
        return self._parent

    @property
    def annotation(self) -> ElementCollection[Element]:
        """Structured content associated with the Element"""
        return self._annotation

    @property
    def attributes(self) -> ElementCollection[Attribute]:
        """The attributes associated with the Element"""
        return self._attributes

    @property
    def content(self) -> Content:
        """The content associated with the Element"""
        return self._content

    @property
    def dirty(self) -> bool:
        """Indicates whether there are pending updates in this element."""
        return self._dirty

    @dirty.setter
    def dirty(self, value: bool) -> None:
        """
        Set the dirty flag here and on the parent Element
        """
        self._dirty = value
        # Propagate dirty flag up to parent if parent isn't already dirty
        if self._parent and not self._parent.dirty:
            self._parent.dirty = value

    def update(self: T) -> T:
        """
        Return a new element with all pending changes applied.
        Calls update() on collections to ensure changes propagate.
        """
        if not self.dirty and not self.attributes.dirty and not self.annotation.dirty:
            return self
            
        # Create a shallow copy of this element
        new_element = copy(self)
        
        # Update attributes collection if dirty
        if self.attributes.dirty:
            new_element._attributes = self.attributes.update(new_element)
            
        # Update annotation collection if dirty
        if self.annotation.dirty:
            new_element._annotation = self.annotation.update(new_element)
            
        # Apply transforms to the element properties
        property_updates = {}
        for transform in self._transforms:
            property_updates.update(transform(self))
            
        # Apply property updates
        for prop, value in property_updates.items():
            setattr(new_element, f"_{prop}", value)
            
        # Reset dirty flag and transforms
        new_element._dirty = False
        new_element._transforms = []
        
        return cast(T, new_element)

    def visit(self, visitor: Callable[[Element], None]) -> None:
        """
        Apply visitor function to this element and recursively to all
        attributes and child elements.
        """
        # Visit self
        visitor(self)
        
        # Visit all attributes
        for attr in self.attributes:
            if isinstance(attr, Element):
                attr.visit(visitor)
                
        # Visit content if it's an Element or list of Elements
        if isinstance(self.content, Element):
            self.content.visit(visitor)
        elif isinstance(self.content, list):
            for child in self.content:
                if isinstance(child, Element):
                    child.visit(visitor)
                    
        # Visit annotations
        for item in self.annotation:
            item.visit(visitor)

    def clone(self: T, **overrides) -> T:
        """
        Create a new element with optional modifications.
        Used to maintain immutability while updating properties.
        """
        # Get class of this instance
        cls = self.__class__
        
        # Prepare arguments for constructor
        kwargs = {
            'parent': overrides.get('parent', self.parent),
            'attributes': overrides.get('attributes', list(self.attributes)),
            'content': overrides.get('content', self.content),
            'annotation': overrides.get('annotation', list(self.annotation))
        }
        
        # Create new instance
        new_instance = cls(**kwargs)
        
        # Apply any additional overrides not covered by constructor
        for key, value in overrides.items():
            if key not in kwargs:
                setattr(new_instance, f"_{key}", value)
                
        return cast(T, new_instance)

    @abstractmethod
    def render(self, indent: int = 0) -> str:
        """Render element as SVG string with appropriate indentation."""
        pass

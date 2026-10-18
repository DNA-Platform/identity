import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Element Implementation v2 ]]</Title>
        <CodeBox
            language="python"
        >
            {`${''}from __future__ import annotations
from abc import ABC, abstractmethod
from typing import List, Union, Optional, TypeVar, Callable, Dict, Any, cast, Type
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
        """
        self._parent = parent
        self._content = content
        
        # Create ElementCollection instances for attributes and annotations
        from element_collection import ElementCollection
        
        # Initialize empty collections
        self._attributes = ElementCollection[Attribute](self)
        self._annotation = ElementCollection[Element](self)
        
        # Directly set the internal elements list rather than using add()
        # This avoids triggering the dirty flag and transformations
        if attributes:
            self._attributes._elements = attributes.copy()
            
        if annotation:
            self._annotation._elements = annotation.copy()
                
        self._dirty = False
        self._transforms: List[Callable[[Element], Dict[str, Any]]] = []

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
    def _dirty(self) -> bool:
        """Indicates whether there are pending updates."""
        return self.__dirty

    @_dirty.setter
    def _dirty(self, value: bool) -> None:
        """
        Set the dirty flag here and on the parent Element
        """
        self.__dirty = value
        # Propagate dirty flag up to parent
        if self._parent and hasattr(self._parent, '_dirty'):
            setattr(self._parent, '_dirty', value)

    def update(self: T) -> T:
        """
        Return a new element with all pending changes applied.
        Calls update() on collections to ensure changes propagate.
        """
        if not self._dirty and not self._attributes._dirty and not self._annotation._dirty:
            return self
            
        # Create a shallow copy of this element
        new_element = copy(self)
        
        # Update attributes collection if dirty
        if self._attributes._dirty:
            new_element._attributes = self._attributes.update(new_element)
            
        # Update annotation collection if dirty
        if self._annotation._dirty:
            new_element._annotation = self._annotation.update(new_element)
            
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
        for attr in self._attributes:
            if isinstance(attr, Element):
                attr.visit(visitor)
                
        # Visit content if it's an Element or list of Elements
        if isinstance(self._content, Element):
            self._content.visit(visitor)
        elif isinstance(self._content, list):
            for child in self._content:
                if isinstance(child, Element):
                    child.visit(visitor)
                    
        # Visit annotations
        for item in self._annotation:
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
            'parent': overrides.get('parent', self._parent),
            'attributes': overrides.get('attributes', list(self._attributes)),
            'content': overrides.get('content', self._content),
            'annotation': overrides.get('annotation', list(self._annotation))
        }
        
        # Create new instance
        new_instance = cls(**kwargs)
        
        # Apply any additional overrides not covered by constructor
        for key, value in overrides.items():
            if key not in kwargs:
                setattr(new_instance, f"_{key}", value)
                
        return cast(T, new_instance)

    def add_attribute(self, attribute: Attribute) -> None:
        """
        Queue adding an attribute to this element.
        """
        self._attributes.add(attribute)
        self._dirty = True

    def remove_attribute(self, attribute: Attribute) -> None:
        """
        Queue removing an attribute from this element.
        """
        self._attributes.remove(attribute)
        self._dirty = True

    def set_content(self, content: Content) -> None:
        """
        Queue updating the content of this element.
        """
        def content_transform(_: Element) -> Dict[str, Any]:
            return {'content': content}
            
        self._transforms.append(content_transform)
        self._dirty = True

    def add_annotation(self, annotation: Element) -> None:
        """
        Queue adding an annotation to this element.
        """
        self._annotation.add(annotation)
        self._dirty = True

    def remove_annotation(self, annotation: Element) -> None:
        """
        Queue removing an annotation from this element.
        """
        self._annotation.remove(annotation)
        self._dirty = True

    @abstractmethod
    def render(self, indent: int = 0) -> str:
        """Render element as SVG string with appropriate indentation."""
        pass
`}
        </CodeBox>
    </Chapter>
);

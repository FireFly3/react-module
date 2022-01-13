import React from 'react';

const MyComponent = (prop) => {
    const children = prop.children;
    return (
        <div>
            {children[0].name}
            {children[1]}
        </div>
    );
};

export default MyComponent;
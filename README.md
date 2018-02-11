# Explore composition and inheritance #

Inheritance and composition are ways to abstract common features from objects leading to simpler and reusable code.

Inheritance is useful when a thing "is a" type of a thing.
A Dog is an Animal.

Composition is useful when a thing "has a" type of a thing.
A Dog has a bark.

You can usually describe complex objects either way.
However, fundamental differences exist.

Composition allows you to add features in the future that you couldn't forsee.

Inheritance allows you to re-use features that you alrady planned on and expected.

Multiple inheritance could allow for reusing unforseen features but is not avaialable in js. It also leads to unnecessary complexity.

These examples will demonstrate why composition is prefered to inheritance.

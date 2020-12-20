# What is PQQ?

PQQ is a npm package that allows you to create a border or padding around images in your website.
It makes your website look marvalous and amazing at the same time.

# Installation

Depends, if your want to use it globally on your system,
use this command:

`npm install -g pqq`

If you want to install only on 1 project
you have made, use this command:

`npm install pqq --save`

# How to use?

Here is the 2 examples of how to use PQQ:

`EXAMPLE #1`

```
    import { pqq_run } from 'pqq';

    pqq_run({
        pqq_type: 'soft'
        padding: false
    });
```

`EXAMPLE #2`

```
    import { pqq_run } from 'pqq';

    pqq_run({
        pqq_type: 'hard'
        padding: true
    });
```

# Options

PQQ supports 2 options, they are both optional:

* *pqq_type* - _soft | hard_ (Default is soft)
* *padding* - _boolean_ (Default is false)
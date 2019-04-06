import * as R from 'ramda';

export default {
    Query: {
        user: (root: any, obj: any) => ({
            id: '7777',
            firstName: "Daniil",
            lastName: 'Dd',
        })
    },
    User: {
        id: R.prop('id'),
        firstName: R.prop('firstName'),
        lastName: R.prop('lastName'),
    }
}
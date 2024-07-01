
    export type RemoteKeys = 'techshop/ListLastNewsTopics' | 'techshop/Products';
    type PackageType<T> = T extends 'techshop/Products' ? typeof import('techshop/Products') :T extends 'techshop/ListLastNewsTopics' ? typeof import('techshop/ListLastNewsTopics') :any;
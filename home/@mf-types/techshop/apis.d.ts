
    export type RemoteKeys = 'techshop/TechNews' | 'techshop/ListLastNewsTopics';
    type PackageType<T> = T extends 'techshop/ListLastNewsTopics' ? typeof import('techshop/ListLastNewsTopics') :T extends 'techshop/TechNews' ? typeof import('techshop/TechNews') :any;
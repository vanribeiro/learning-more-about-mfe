
    export type RemoteKeys = 'techfeed/TechNews';
    type PackageType<T> = T extends 'techfeed/TechNews' ? typeof import('techfeed/TechNews') :any;
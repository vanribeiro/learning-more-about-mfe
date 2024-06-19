
    export type RemoteKeys = 'home/button';
    type PackageType<T> = T extends 'home/button' ? typeof import('home/button') :any;
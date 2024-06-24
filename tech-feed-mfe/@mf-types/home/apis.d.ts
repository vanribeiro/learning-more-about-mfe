
    export type RemoteKeys = 'home/Header';
    type PackageType<T> = T extends 'home/Header' ? typeof import('home/Header') :any;
import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolvers = ({ paths }: BuildOptions): ResolveOptions => {
    const { src } = paths;

    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
};

import tw, { styled, css } from 'twin.macro';

export const Content = styled.div(() => [
    css`
        height: calc(100vh - 80px);
    `,
    tw`flex items-center justify-center flex-col`
]);

export const Heading = styled.h1(() => [
    tw`text-7xl font-bold text-green-700 text-center font-mono mb-4`
]);

export const Context = styled.h1(() => [
    tw`text-2xl text-gray-800 text-center font-sans`
]);
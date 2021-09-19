import tw, { styled } from 'twin.macro';

export const WrapperHeader = styled.div(() => [
    tw`w-full h-20 fixed top-0 left-0 z-20 flex justify-center items-center`
]);

export const ContentHeader = styled.div(() => [
    tw`container mx-auto flex justify-end`
]);

export const NavMenu = styled.div(() => [
    tw`flex`
]);

export const MenuItem = styled.a(() => [
    tw`inline-block ml-8 text-xl font-sans font-semibold text-gray-500 hover:text-green-500`
]);
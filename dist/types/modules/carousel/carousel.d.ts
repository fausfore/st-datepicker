import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
export declare class CarouselComponent {
    images: {
        src: string;
        alt: string;
        link: string;
    }[];
    test: {
        src: string;
        alt: string;
        link: string;
    }[];
    componentDidLoad(): void;
    initGestureArea(): void;
    render(): JSX.Element;
}
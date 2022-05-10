import React from "react";
interface Props {
    /**
     * Supports children like any normal div, but only direct string children will be processed for highlighted text
     */
    children?: React.ReactNode;
    /**
     * Custom styles
     */
    className?: string;
    /**
     * Variant of highlight to apply.
     * 'background' (default) applies a colored box behind text
     * 'textColor' adjusts text color with no background
     */
    highlightVariant?: "background" | "textColor";
    /**
     * Custom styles for highlighted blocks
     */
    highlightClassName?: string;
}
/**
 * TextWithHighlights component is a single-purpose component to take any string children
 * and replace the markdown 'highlight' markers (==) with a styled <mark> to produce
 * highlighted sections of text.
 *
 * For example:
 * "A phrase with ==multiple parts== that are ==highlighted== seprately"
 *
 * Will show "multiple parts" and "highlighted" with a highlighted background color,
 * and the '==' will be removed.
 *
 * Note: TextWithHighlights does not traverse nested children. Only direct string children will be processed.
 *
 */
export declare const TextWithHighlights: ({ children, className, highlightVariant, highlightClassName, }: Props) => React.ReactElement;
export {};

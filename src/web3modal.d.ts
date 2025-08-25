// Allows using <w3m-button /> in TSX without type errors
import React from 'react'


declare global {
namespace JSX {
interface IntrinsicElements {
'w3m-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
}
}
}
export {}
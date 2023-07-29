import clsx from "clsx";

function getClassName({ className}) {
    return clsx(
        'bg-black text-white text-lg font-bold rounded-xl transition duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-opacity-50',
        className
    )
}

const sizes = {
    s: 'px-4 py-3',
    m: 'px-6 py-4',
    l: 'w-full px-4 py-3',
};
  
const variants = {
    primary: 'bg-marigold focus:ring-marigold',
    secondary: 'bg-tomato focus:ring-tomato',
    dark: 'bg-black focus:ring-white',
};

const Button = ({children, className, size = 's', variant = 'primary', ...rest}) => {
    return (
        <button className={clsx(sizes[size], variants[variant],getClassName({ className }))} {...rest}>
            {children}
        </button>
    )
}

export default Button;
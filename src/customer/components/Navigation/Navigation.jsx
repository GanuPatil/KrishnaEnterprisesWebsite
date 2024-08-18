import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import img1 from './Images/krishnaenterprises.jpeg'

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'About', href: '#', current: false },
    { name: 'Services', href: '#', current: false },
    { name: 'Pricing', href: '#', current: false },
    { name: 'Client', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
    { name: ' +91 9545826898', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return ( <
        Disclosure as = "nav"
        className = "bg-gradient-to-r from-gray-700 via-gray-900 to-black" >
        <
        div className = "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" >
        <
        div className = "relative flex h-20 items-center justify-between" >
        <
        div className = "flex flex-1 items-center justify-start sm:items-stretch sm:justify-start" >
        <
        div className = "flex flex-shrink-0 items-center justify-center" >
        <
        img alt = "Your Company"
        src = { img1 }
        className = "h-12 w-12 rounded-full" /
        >
        <
        /div> <
        div className = "ml-3" >
        <
        span className = "text-gradient text-1.2xl font-extrabold" > KRISHNA ENTERPRISES < /span> <
        span className = "block text-white text-xs font-normal leading-tight" > SALES AND SERVICES < /span> <
        /div>

        <
        style jsx > { `
               .text-gradient {
                background: linear-gradient(90deg, rgba(255,105,135,1) 0%, rgba(255,207,0,1) 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;}
            ` } < /style> <
        div className = "hidden sm:ml-auto sm:flex" >
        <
        div className = "flex space-x-2 justify-end" > {
            navigation.map((item) => ( <
                a key = { item.name }
                href = { item.href }
                ariacurrent = { item.current ? 'page' : undefined }
                className = {
                    classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                        'rounded-md px-4 py-2 text-lg font-medium transition duration-300',
                    )
                } >
                { item.name } <
                /a>
            ))
        } <
        /div> <
        /div> <
        /div> <
        div className = "absolute inset-y-0 right-0 flex items-center sm:hidden" > { /* Mobile menu button */ } <
        DisclosureButton className = "inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" >
        <
        span className = "sr-only" > Open main menu < /span> <
        Bars3Icon className = "block h-6 w-6"
        ariahidden = "true" / >
        <
        XMarkIcon className = "hidden h-6 w-6"
        ariahidden = "true" / >
        <
        /DisclosureButton> <
        /div> <
        div className = "hidden sm:flex sm:items-center sm:space-x-4" > { /* Larger screen menu */ } <
        DisclosureButton className = "inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" >
        <
        span className = "sr-only" > Open main menu < /span> <
        Bars3Icon className = "block h-6 w-6"
        ariahidden = "true" / >
        <
        XMarkIcon className = "hidden h-6 w-6"
        ariahidden = "true" / >
        <
        /DisclosureButton> <
        /div> <
        /div> <
        /div>

        <
        DisclosurePanel className = "sm:hidden" >
        <
        div className = "space-y-1 px-4 pb-6 pt-4" > {
            navigation.map((item) => ( <
                DisclosureButton key = { item.name }
                as = "a"
                href = { item.href }
                ariacurrent = { item.current ? 'page' : undefined }
                className = {
                    classNames(
                        item.current ? 'bg-gray-900 text-white font-bold' : 'hover:text-white font-bold hover:bg-gray-700',
                        'block rounded-md px-4 py-2 text-base font-medium border border-transparent shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl'
                    )
                } >
                { item.name } <
                /DisclosureButton>
            ))
        } <
        /div> <
        /DisclosurePanel> <
        /Disclosure>
    )
}
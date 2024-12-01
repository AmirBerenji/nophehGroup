export default function RootLayout({
    children,
}:{children:React.ReactNode})
{
    return (
        <>
             <img  src="/assets/background.jpeg" className=" w-full fixed object-cover h-screen  -z-10" alt="hero 1" />
             <div className="w-full z-10" >
                {children}   
             </div>
            
        </>
    )
}
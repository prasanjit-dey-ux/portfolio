export const Header = () => {
    return (
        <div className="font-inter text-base text-primary-text flex justify-between items-start pt-6">
            <h1>Prasanjit Dey</h1>
            <p>3:24PM</p>
            <p>Get in touch</p>
            <div className="flex flex-col gap-10 w-72">
                <div className="flex justify-between items-start gap-10">
                    <p>Design</p>
                        <div className="flex flex-col gap-1">
                            <p>Figma</p>
                            <p>Prototyping</p>
                            <p>Wireframing</p>
                        </div>
                </div>
                <div className="flex justify-between items-start gap-10">
                    <p>Development</p>
                        <div className="flex flex-col gap-1">
                            <p>HTML/CSS</p>
                            <p>Typescript</p>
                            <p>React JS</p>
                            <p>React Motion</p>
                            <p>Next JS</p>
                        </div>
                </div>

            </div>
        </div>
    )
}
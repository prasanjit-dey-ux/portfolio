export const Header = () => {
  return (
    <header className="font-inter text-base text-primary-text pt-6">
      <div className="flex justify-between items-start">

        {/* Column 1 */}
        <h1 className="font-medium whitespace-nowrap">
          Prasanjit Dey
        </h1>

        {/* Column 2 */}
        <p className="whitespace-nowrap">
          3:24 PM
        </p>

        {/* Column 3 */}
        <p className="cursor-pointer text-primary whitespace-nowrap">
          Get in touch
        </p>

        {/* Column 4 */}
        <div className="flex flex-col gap-10 text-right">
          <div className="flex justify-between w-72">
            <p className="text-secondary-text">Design</p>
            <div className="flex flex-col gap-1">
              <p>Figma</p>
              <p>Prototyping</p>
              <p>Wireframing</p>
            </div>
          </div>

          <div className="flex justify-between gap-10">
            <p className="text-secondary-text">Development</p>
            <div className="flex flex-col gap-1">
              <p>HTML/CSS</p>
              <p>TypeScript</p>
              <p>React</p>
              <p>Motion</p>
              <p>Next.js</p>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

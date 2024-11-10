const TeamMember = ({ name, role, imgSrc, socialLinks }) => (
    <div className="text-center text-gray-500 dark:text-gray-400">
      <img className="mx-auto mb-4 rounded-2xl h-48 w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 " src={imgSrc} alt={`${name} Avatar`} />
      <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
        {name}
      </h3>
      <p>{role}</p>
      <ul className="flex justify-center mt-4 space-x-4">
        {socialLinks.map(({ href, color, svg }, index) => (
          <li key={index}>
            <a href={href} className={`${color} hover:text-gray-900 dark:hover:text-white`}>
              {svg}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
export default TeamMember;
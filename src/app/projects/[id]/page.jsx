import Image from "next/image";
import Link from "next/link";
import projects from "../../data/projects.json";

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }))
}

export default async function ProjectDetail({ params }) {
    const paramID = await params;
    const project = projects.find((p) => p.id === paramID.id);

    if (!project) {
        return <h1 className="text-center mt-10 text-white">404 Error! Project Not Found</h1>;
    }
    return (
        <div>
            <div className="flex justify-between items-center bg-gray-900 py-4 mb-8 px-4">
                {/* Logo and Name */}
                <div className="flex items-center gap-4">
                    <Image src="/logo.png" alt="logo" width={50} height={50} />
                    <p className="font-courier text-white text-xl whitespace-nowrap overflow-hidden w-[8.5em] border-r-2 border-orange-500 animate-typing animate-blink">Daniel Freeman</p>
                </div>

                {/* Desktop Links */}
                <div className="flex items-center gap-8 mr-4">
                    <Link className="text-white font-segoe text-xl border-b-2 border-gray-900 hover:border-white transition duration-500" href="/projects">Back</Link>
                </div>
            </div>
            {/* Main Contennt */}
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10 space-y-4">
                    <h1 className="text-3xl font-bold text-center mb-4">{project.title}</h1>
                    <div className="w-[300px] sm:w-[500px] md:w-[650px] mx-auto">
                        <div className="relative h-40 sm:h-60 md:h-80 rounded-sm overflow-hidden">
                            <Image src={project.image} alt={project.title} fill className="object-cover" />
                        </div>
                    </div>
                    <p className="text-gray-700 mb-4 mx-auto max-w-[300px] sm:max-w-[500px] md:max-w-[600px] text-center text-md">{project.description}</p>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="block bg-gray-900 text-orange-400 max-w-[300px] sm:max-w-[500px] md:max-w-[650px] mx-auto text-center py-2 rounded-md hover:bg-gray-700 transition">View on GitHub</a>
                </div>
            </div>
        </div>
    );
}
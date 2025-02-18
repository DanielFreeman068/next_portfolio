import Image from "next/image";
import projects from "../data/projects.json";

export async function getStaticPaths() {
    const paths = projects.map((project) => ({
        params: { id: project.id }
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const project = projects.find((p) => p.id === params.id);
    return { props: { project } };
}

export default function ProjectDetail({ project }) {
    return (
        <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-4">{project.title}</h1>
                <div className="relative w-full h-64 mb-4">
                    <Image src={project.image} alt={project.title} fill className="object-cover rounded-md" />
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="block bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition">View on GitHub</a>
            </div>
        </div>
    );
}

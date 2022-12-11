import type { RequestHandler } from '@builder.io/qwik-city';

export interface SectionData {
    id: number;
    name: string; // section name
    label: string; // reference to the section
    description: string; // section description
    image?: string;
    opts?: SectionOptions;
}

interface SectionOptions {
    skipHeader?: boolean;
}

export const onGet: RequestHandler<SectionData[]> = async ({ params }) => {
    // replace with database call later
    const sections: SectionData[] = [
        {
            id: 0,
            name: "Hi, I am",
            label: "Benjamin Schober.",
            description: "I'm a software engineer currently pursuing a master's degree in artificial intelligence and computer vision. Previously, I studied Game Engineering and successfully completed my bachelor thesis on 'Locomotion in VR'.",
            opts: {
                skipHeader: true,
            }
        },
        {
            id: 1, // will be a uuid later
            name: 'About me',
            label: 'about',
            description: "I'm a software engineer currently pursuing a master's degree in artificial intelligence and computer vision.Previously, I studied Game Engineering and successfully completed my bachelor thesis on 'Locomotion in VR'.",
            image: '/me.jpg'

        },
        {
            id: 2,
            name: 'Experience',
            label: 'experience',
            description: 'Section 2 description'
        },
        {
            id: 3,
            name: 'Showcase',
            label: 'showcase',
            description: 'Section 3 description'
        },
        {
            id: 4,
            name: 'Projects',
            label: 'projects',
            description: 'Section 4 description'
        },
        {
            id: 5,
            name: 'Contact',
            label: 'contact',
            description: 'Section 5 description'
        },
    ];

    return sections;
};
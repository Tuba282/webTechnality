import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetailPage from '@/screens/Services/ServiceDetail/ServiceDetailPage';

export default async function ServicePage({ params }) {
    const { slug } = await params;

    return (
        <>
            <Navbar />
            <ServiceDetailPage slug={slug} />
            <Footer />
        </>
    );
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
    const { slug } = await params;

    // Convert slug to title (e.g., 'frontend-development' -> 'Frontend Development')
    const title = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return {
        title: `${title} | WebTechnality Services`,
        description: `Professional ${title} services. Transform your vision into reality with our expert team.`,
    };
}

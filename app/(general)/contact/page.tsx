import { Metadata } from 'next';
//


export const metadata:Metadata = {
 title: 'SEO Contact Page',
 description: 'SEO Description',
 keywords:['Contact Page','Jose Lopez','Information']
};
export default function ContactPage() {
    return (
        <span className="text-7xl">Contact Page!!!</span>
    )
}
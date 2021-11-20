import Head from 'next/head'
import {Categories, PostCard, PostWidget} from "../components";
import {getPosts} from '../services'
import {FeaturedPosts} from "../sections";

export default function Home({post}) {

    return (
        <div className="container mx-auto px-10 mb-8">
            <Head>
                <meta name="author" content="Ashish Kumar Bhoi"/>
                <meta name="description"
                      content="This is a custom made personal blogging site with react, nodejs and GraphQL"/>
                <meta name="keywords"
                      content="Blog, Ashish Kumar Bhoi, Nextjs, GraphQL, GraphCMS , node, react"/>
                <title>Home | Personal Blog</title>
            </Head>
            <FeaturedPosts/>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 col-span-1">
                    {post.map((post) => <PostCard post={post.node} key={post.title}/>)}
                </div>
                <div className="lg:col-span-4 col-span-1">
                    <div className="lg:sticky relative top-8">
                        <PostWidget/>
                        <Categories/>
                    </div>

                </div>
            </div>


        </div>
    )
}

export async function getStaticProps() {
    const post = (await getPosts()) || [];

    return {
        props: {post}
    }
}
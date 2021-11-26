import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/alink';

function PostFour ( props ) {
    const { post } = props;

    let date = new Date( post.date );
    let options = { year: "numeric", month: "short", day: "2-digit", timeZone: "UTC" };

    return (
        <article className="entry">
            <figure className="entry-media" style={ { paddingTop: `${post.image[ 0 ].height / post.image[ 0 ].width * 100}%` } }>
                <ALink href={ `/blog/single/default/${post.slug}` }>
                    <div className="lazy-overlay"></div>

                    <LazyLoadImage
                        alt="Post"
                        src={ process.env.NEXT_PUBLIC_ASSET_URI + post.image[ 0 ].url }
                        threshold={ 500 }
                        effect="blur"
                        height="auto"
                    />
                </ALink>
            </figure>
            <div className="entry-body text-center p-0">
                <div className="entry-meta">
                    <ALink href="#">{ date.toLocaleDateString( 'en-US', options ) }</ALink>, &nbsp;
                    <ALink href="#">{ post.comments } Comments</ALink>
                </div>

                <h2 className="entry-title">
                    <ALink href={ `/blog/single/default/${post.slug}` }>
                        { post.title }
                    </ALink>
                </h2>

                <div className="entry-content">
                    <p>
                        { post.content }
                    </p>
                    <ALink href={ `/blog/single/default/${post.slug}` } className="read-more">READ MORE</ALink>
                </div>
            </div>
        </article >
    );
}

export default PostFour
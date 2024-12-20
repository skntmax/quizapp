import React from 'react'

import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    FacebookShareButton,
    FacebookShareCount,
    GabIcon,
    GabShareButton,
    HatenaIcon,
    HatenaShareButton,
    HatenaShareCount,
    InstapaperIcon,
    InstapaperShareButton,
    LineIcon,
    LineShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    LivejournalIcon,
    LivejournalShareButton,
    MailruIcon,
    MailruShareButton,
    OKIcon,
    OKShareButton,
    OKShareCount,
    PinterestIcon,
    PinterestShareButton,
    PinterestShareCount,
    PocketIcon,
    PocketShareButton,
    RedditIcon,
    RedditShareButton,
    RedditShareCount,
    TelegramIcon,
    TelegramShareButton,
    TumblrIcon,
    TumblrShareButton,
    TumblrShareCount,
    TwitterShareButton,
    ViberIcon,
    ViberShareButton,
    VKIcon,
    VKShareButton,
    VKShareCount,
    WeiboIcon,
    WeiboShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    WorkplaceIcon,
    WorkplaceShareButton,
    XIcon,
  } from 'react-share';

function SharableContent({shareUrl, title}) {
  return (
    <>
         <div  style={{display:"flex" , justifyContent:"start"}}  >
        <div className="Demo__some-network mx-1">
        <FacebookShareButton url={shareUrl} className="Demo__some-network__share-button" >
          <FacebookIcon size={17} round />
        </FacebookShareButton>

        <div>
          <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
          </FacebookShareCount>
        </div>
      </div>

      <div className="Demo__some-network mx-1">
        <FacebookMessengerShareButton
          url={shareUrl}
          appId="521270401588372"
          className="Demo__some-network__share-button"
        >
          <FacebookMessengerIcon size={17} round />
        </FacebookMessengerShareButton>
      </div>

      <div className="Demo__some-network mx-1">
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <XIcon size={17} round />
        </TwitterShareButton>
      </div>

      <div className="Demo__some-network mx-1">
        <TelegramShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <TelegramIcon size={17} round />
        </TelegramShareButton>
      </div>

      <div className="Demo__some-network mx-1">
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <WhatsappIcon size={17} round />
        </WhatsappShareButton>
      </div>

      <div className="Demo__some-network mx-1">
        <LinkedinShareButton url={shareUrl} className="Demo__some-network__share-button">
          <LinkedinIcon size={17} round />
        </LinkedinShareButton>
      </div>

    


      



      <div className="Demo__some-network mx-1">
        <RedditShareButton
          url={shareUrl}
          title={title}
          windowWidth={660}
          windowHeight={460}
          className="Demo__some-network__share-button"
        >
          <RedditIcon size={17} round />
        </RedditShareButton>

      
      </div>

      <div className="Demo__some-network mx-1">
        <GabShareButton
          url={shareUrl}
          title={title}
          windowWidth={660}
          windowHeight={640}
          className="Demo__some-network__share-button"
        >
          <GabIcon size={17} round />
        </GabShareButton>
      </div>

      <div className="Demo__some-network mx-1">
        <TumblrShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <TumblrIcon size={17} round />
        </TumblrShareButton>

      
      </div>

      <div className="Demo__some-network mx-1">
        <LivejournalShareButton
          url={shareUrl}
          title={title}
          description={shareUrl}
          className="Demo__some-network__share-button"
        >
          <LivejournalIcon size={17} round />
        </LivejournalShareButton>
      </div>

      <div className="Demo__some-network mx-1">
        <MailruShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <MailruIcon size={17} round />
        </MailruShareButton>
      </div>

      <div className="Demo__some-network mx-1">
        <EmailShareButton
          url={shareUrl}
          subject={title}
          body="body"
          className="Demo__some-network__share-button"
        >
          <EmailIcon size={17} round />
        </EmailShareButton>
      </div>

      <div className="Demo__some-network mx-1">
        <ViberShareButton url={shareUrl} title={title} className="Demo__some-network__share-button">
          <ViberIcon size={17} round />
        </ViberShareButton>
      </div>

      <div className="Demo__some-network mx-1">
        <WorkplaceShareButton
          url={shareUrl}
          quote={title}
          className="Demo__some-network__share-button"
        >
          <WorkplaceIcon size={17} round />
        </WorkplaceShareButton>
      </div>

      <div className="Demo__some-network mx-1">
        <LineShareButton url={shareUrl} title={title} className="Demo__some-network__share-button">
          <LineIcon size={17} round />
        </LineShareButton>
      </div>

  
      <div className="Demo__some-network mx-1">
        <PocketShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <PocketIcon size={17} round />
        </PocketShareButton>
      </div>

      <div className="Demo__some-network mx-1">
        <InstapaperShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button"
        >
          <InstapaperIcon size={17} round />
        </InstapaperShareButton>
      </div>

      <div className="Demo__some-network mx-1">
        <HatenaShareButton
          url={shareUrl}
          title={title}
          windowWidth={660}
          windowHeight={460}
          className="Demo__some-network__share-button"
        >
          <HatenaIcon size={17} round />
        </HatenaShareButton>

      
      </div>
    </div>

    </>
  )
}

export default SharableContent

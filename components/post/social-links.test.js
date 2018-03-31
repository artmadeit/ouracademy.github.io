import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import { SocialLinks } from './social-links'
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon
} from 'react-share'

describe('SocialLinks', () => {
  it('should contains a facebook, twitter and linkedin share buttons', () => {
    const post = {
        title: 'Some post',
        description: 'some description',
        path: '/some-post'
    }
    const wrapper = shallow(<SocialLinks 
                            title={post.title}
                            description={post.description}
                            router={{asPath: post.path} }
                            />)
    
    const url = `https://www.academyfor.us${post.path}`
    const facebookShareButton = wrapper.find(FacebookShareButton)
    expect(facebookShareButton).toHaveLength(1)
    expect(facebookShareButton.props().url).toBe(url)
    expect(facebookShareButton.props().quote).toBe(post.title)
    
    const twitterShareButton = wrapper.find(TwitterShareButton)
    expect(twitterShareButton).toHaveLength(1)
    expect(twitterShareButton.props().url).toBe(url)
    expect(twitterShareButton.props().title).toBe(post.title)
    
    const linkedinShareButton = wrapper.find(LinkedinShareButton)
    expect(linkedinShareButton).toHaveLength(1)
    expect(linkedinShareButton.props().url).toBe(url)
    expect(linkedinShareButton.props().title).toBe(post.title)
    expect(linkedinShareButton.props().description).toBe(post.description)
  })
})
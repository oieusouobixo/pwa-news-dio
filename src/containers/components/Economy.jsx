import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import { createMarkup } from '../../utils'
import { useHistory } from 'react-router-dom'

function Economy({ values }) {
    const HISTORY = useHistory()

    const RENDER_IMG = ({ image, description }) =>
    <img src={image.url} alt={description} width="100%" />

    const RENDER_DESCRIPTION = (description) => <p dangerouslySetInnerHTML={createMarkup(description)} />

    const OPEN_POST = (id) => {
        HISTORY.push(`/economy/${id}`)
    }

    const RENDER_POST = (post, index) => {
        const { title, image, description, id } = post
        return (
            <Col span={24} md={12} key={`post-${index}`}>
                <article onClick={() => OPEN_POST(id)}>
                    <p>
                        <strong dangerouslySetInnerHTML={createMarkup(title)} />
                    </p>
                    {image?.url ? RENDER_IMG({ image, description }) : RENDER_DESCRIPTION(description)}
                </article>
            </Col>
        )
    }

    return (
        <Row gutter={[16, 16]}>
            {values?.map(RENDER_POST)}
        </Row>
    )
}

Economy.defaultProps = {
    values: []
}

Economy.propTypes = {
    values: PropTypes.array.isRequired
}

export default memo(Economy)
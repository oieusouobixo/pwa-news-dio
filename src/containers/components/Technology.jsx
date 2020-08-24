import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import { createMarkup } from '../../utils'
import { useHistory } from 'react-router-dom'

function Technology({ values }) {
    const HISTORY = useHistory()

    const RENDER_IMG = ({ image, description }) =>
    <div>
        <img src={image.url} alt={description} width="100%" />
    </div>

    const OPEN_POST = (id) => {
        HISTORY.push(`/technology/${id}`)
    }

    const RENDER_POST = (post, index) => {
        const { title, image, description, id } = post
        return (
            <Col span={12} md={6} key={`technology-${index}`}>
                <article onClick={() => OPEN_POST(id)}>
                    <p>
                        <strong dangerouslySetInnerHTML={createMarkup(title)} />
                    </p>
                    <p dangerouslySetInnerHTML={createMarkup(description)} />
                    {image.url && RENDER_IMG({ image, description })}
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

Technology.defaultProps = {
    values: []
}

Technology.propTypes = {
    values: PropTypes.array.isRequired
}

export default memo(Technology)
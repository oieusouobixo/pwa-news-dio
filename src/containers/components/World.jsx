import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import { createMarkup } from '../../utils'
import { useHistory } from 'react-router-dom'

function World({ values }) {
    const HISTORY = useHistory()

    const RENDER_IMG = ({ image, description }) =>
    <div>
        <img src={image.url} alt={description} width="100%" />
    </div>

    const OPEN_POST = (id) => {
        HISTORY.push(`/world/${id}`)
    }

    const RENDER_POST = (post, index) => {
        const { title, image, description, id } = post
        const IS_FIRST = index === 0
        const SPAN_VALUE = IS_FIRST ? 24 : 12

        return (
            <Col span={SPAN_VALUE} key={`world-${index}`}>
                <article onClick={() => OPEN_POST(id)}>
                    <p>
                        <strong dangerouslySetInnerHTML={createMarkup(title)} />
                    </p>
                    <p dangerouslySetInnerHTML={createMarkup(description)} />
                    {IS_FIRST && RENDER_IMG({ image, description })}
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

World.defaultProps = {
    values: []
}

World.propTypes = {
    values: PropTypes.array.isRequired
}

export default memo(World)
import React, { memo, useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import Economy from './components/Economy'
import Technology from './components/Technology'
import World from './components/World'
import Api from '../api'

function Home() {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)

    const HANDLE_NEWS = (articles) => {
        setLoading(false)
        setNews({
            world: articles[0]?.value.value,
            economy: articles[1]?.value.value,
            technology: articles[2]?.value.value,
        })
    }

    useEffect(() => {
        setLoading(true)
        Promise.allSettled([
            Api.getNews('world'),
            Api.getNews('economy'),
            Api.getNews('technology')
        ])
            .then(HANDLE_NEWS)
    }, [])

    if (loading) return <div>loading</div>

    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col span={24} md={16}>
                    <h2>world</h2>
                    <World values={news?.world} />
                </Col>
                <Col span={24} md={8}>
                    <h2>economy</h2>
                    <Economy values={news?.economy} />
                </Col>
            </Row>
            <hr />
            <Row gutter={[16, 16]}>
                <Col span={24} md={16}>
                    <h2>technology</h2>
                    <Technology values={news?.technology} />
                </Col>
            </Row>
        </div>
    )
}

export default memo(Home)
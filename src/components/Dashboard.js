import React from 'react';
import { useSelector } from 'react-redux';
import Widget from './Widget';
import AddWidgetModal from './AddWidgetModal';
import { Row, Col } from 'react-bootstrap';

const Dashboard = ({ searchText }) => {
    const categories = useSelector(state => state.widgets.categories);

    const filteredCategories = categories.map(category => ({
        ...category,
        widgets: category.widgets.filter(widget =>
            widget.name.toLowerCase().includes(searchText.toLowerCase())
        )
    }));

    return (
        <div className="dashboard">
            {filteredCategories.map(category => (
                <div key={category.id} className="category">
                    <h2>{category.name}</h2>
                    <div className="widget-container">
                        <Row>
                            {category.widgets.length > 0 ? (
                                category.widgets.map(widget => (
                                    <Col key={widget.id} md={4} sm={6} xs={12} className="mb-4">
                                        <Widget categoryId={category.id} widget={widget} />
                                    </Col>
                                ))
                            ) : (
                                <Col md={12}>
                                    <p>No widgets found in this category. Please add one.</p>
                                </Col>
                            )}
                            <Col md={4} sm={6} xs={12} className="mb-4">
                                <AddWidgetModal categoryId={category.id} />
                            </Col>
                        </Row>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;

import React, { Component } from 'react'
import moment from 'moment'
import { Field, Form, Formik } from 'formik'

class TodoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: 1,
            description: 'placeHolder1',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        console.log(values)
    }

    render() {
        let { description, targetDate } = this.state
        return (
            <>
                <h1>Todo</h1>
                <div className="container"></div>
                <Formik 
                initialValues={{ description, targetDate }} 
                onSubmit={this.onSubmit}>
                    {
                        (props) => (
                            <Form>
                                <fieldset>
                                    <lable>description</lable>
                                    <Field className="form-control" type="text" name="description" />
                                </fieldset>
                                <fieldset>
                                    <lable>Target Date</lable>
                                    <Field className="form-control" type="date" name="targetDate" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>

                        )
                    }
                </Formik>
            </>
        )

    }
}

export default TodoComponent
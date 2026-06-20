import { useState } from "react"
import { Form, Button, Col, Row } from "react-bootstrap"
import FormContainer from "../components/FormContainer"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useLoginMutation } from "../slices/userApiSlice"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { toast } from "react-toastify"
import { setCredentials } from "../slices/authSlice"
import { useEffect } from "react"


export default function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [login, { isLoading }] = useLoginMutation()
    const { search } = useLocation()
    const searchParam = new URLSearchParams(search)
    const redirect = searchParam.get('redirect') || '/'
    const { userInfo } = useSelector(state => state.auth)

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [userInfo, navigate, redirect])

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await login({ email, password }).unwrap()
            dispatch(setCredentials({ ...res, email, password }))
            navigate(redirect)
        } catch (error) {
            toast.error(error?.data?.message || error.error);
        }
    }
    return (
        <FormContainer>
            <h1>Sign In</h1>
            <Form onSubmit={submitHandler}>
                {message && <Message variant="danger">{message}</Message>}
                <Form.Group controlId="email" className="my-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId="password" className="my-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary" className="my-3" disabled={isLoading}>
                    Sign In
                </Button>
                {isLoading && <Loader />}
            </Form>
            <Row className="py-3">
                <Col className="text-center">
                    New Customer? <Link to="/register">Register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

import { Hero, Card, Form, Input, Link, Button } from 'react-daisyui'

function Login() {
    return (
        <Hero>
            <Hero.Content className="flex-col lg:flex-row-reverse">
                <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Card.Body>
                        <h1 className='text-center'>
                        <Card.Title>
                            Login
                        </Card.Title>
                        </h1>
                        
                        <Form>
                            <Form.Label title="Email" />
                            <Input
                                type="email"
                                placeholder="me@example.com"
                                className="input-bordered"
                            />
                        </Form>
                        <Form>
                            <Form.Label title="Password" />
                            <Input
                                type="text"
                                placeholder="Type a strong password..."
                                className="input-bordered"
                            />
                            <label className="label">
                                <Link href="#" className="label-text-alt" hover>
                                        Forgot Password?
                                </Link>
                            </label>
                            <label className='label'>
                            <Link href="#" className="label-text-alt" hover>
                                        New to Octave? SignUp now →
                                </Link>
                            </label>
                        </Form>
                        <Form className="mt-6">
                            <Button color='info' variant='outline' className='no-animation'>Login</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Hero.Content>
        </Hero>
    )
}

export default Login
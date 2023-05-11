import { Hero, Card, Form, Input, Link, Button } from 'react-daisyui'

function SignUp() {
    return(
        <Hero>
            <Hero.Content className="flex-col lg:flex-row-reverse">
                <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Card.Body>
                        <h1 className='text-center'>
                        <Card.Title>
                            Signup
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
                                type="password"
                                placeholder="Type a strong password..."
                                className="input-bordered"
                            />
                            <label className='label'>
                            <Link href="/" className="label-text-alt" hover>
                                        Already have an account? Login here →
                                </Link>
                            </label>
                        </Form>
                        <Form className="mt-6">
                            <Button color='info' variant='outline' className='no-animation'>Sign Up</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Hero.Content>
        </Hero>
    )
}

export default SignUp
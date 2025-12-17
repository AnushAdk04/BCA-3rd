function Login() {
    return (
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-screen flex items-center justify-center">

            <div className="bg-white p-8 rounded-lg">

                <h2 className="text-3xl font-bold text-gray-800 text-center">Login</h2>

                <div className="mb-6">
                    <label className="text-lg font-semibold">Username</label>
                    <input type="text" placeholder="Enter Your Username" className="border border-gray-300 w-full p-3 rounded-lg"/>
                </div>

                 <div className="mb-6">
                    <label className="text-lg font-semibold">Password</label>
                    <input type="password" placeholder="Enter Your Password" className="border border-gray-300 w-full p-3 rounded-lg"/>
                </div>

                <button className="bg-blue-700 p-3 w-full font-semibold text-white rounded-lg mb-4">Log In</button>

                <p className="text-sm text-center">Don't have an account? <p className="text-blue-700 cursor-pointer underline">Signup</p></p>

            </div>

        </div>
    )
}

export default Login

import Header from '../Components/Header';
import '../../index.css'

const TOS = () =>{
    return(
           <div>
                <Header />
                <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
                    <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
                    <p className="text-sm text-gray-500 mb-10">Effective Date: March 25, 2025</p>

                    <section className="space-y-6">
                        <div>
                        <h2 className="text-xl font-semibold mb-2">1. About Socialitics</h2>
                        <p>
                             Socialitics is a social media management and analytics platform that enables users to connect, manage, post to, and analyze multiple social media accounts from a single dashboard.
                        </p>
                        </div>

                        <div>
                        <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
                        <p>
                            You must be at least 18 years old to use Socialitics. By using our service, you confirm that you meet this requirement.
                        </p>
                        </div>

                        <div>
                        <h2 className="text-xl font-semibold mb-2">3. Account Registration</h2>
                        <ul className='flex flex-col'>
                            <li >
                                To use certain features of Socialitics, you must register for an account. When you do, you agree to:
                            </li>

                            <li>
                                Provide accurate, current, and complete information.
                            </li>

                            <li>
                                Maintain the security of your account.
                            </li>

                            <li>
                                Notify us immediately of any unauthorized use or security breach.
                            </li>
                                You are responsible for all activities that occur under your account.
                        </ul>
                        </div>

                        <div>
                        <h2 className="text-xl font-semibold mb-2">4. Use of Social Media APIs</h2>
                        <p>
                            Socialitics uses third-party APIs (e.g., Twitter, Instagram) to access your social media data. We use OAuth for secure authentication.
                        </p>
                        </div>
                        <div>


                        <h2 className="text-xl font-semibold mb-2">5. Your Privacy Controls</h2>
                        <ul className='flex flex-col'>
                            <li >
                                You have the right to:
                            </li>

                            <li>
                                 Access the personal information we hold about you
                            </li>

                            <li>
                                 Update or correct your information
                            </li>

                            <li>
                                Delete your account and associated data
                            </li>
                            <li>
                                Withdraw access to your connected social media accounts at any time
                            </li>

                        </ul>
                        </div>

                        


                    </section>
                    </div>
           </div>
    )
}
export default TOS;
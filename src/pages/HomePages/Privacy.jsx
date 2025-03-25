import Header from '../Components/Header';


const Privacy = () =>{
    return(
           <div>
                <Header />
                <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
                    <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
                    <p className="text-sm text-gray-500 mb-10">Effective Date: March 25, 2025</p>

                    <section className="space-y-6">
                        <div>
                        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
                        <ul className="flex flex-col space-y-2 list-disc pl-5">
                            <li>
                            <strong>Account Information:</strong> When you sign up for Socialitics, we collect your name, email, encrypted password, and billing info (if applicable).
                            </li>
                            <li>
                            <strong>Social Media Account Data:</strong> We collect OAuth tokens, profile IDs, post data, and performance analytics. We do not store your social media passwords.
                            </li>

                        </ul>
                        </div>

                        <div>
                        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
                        <ul className="flex flex-col space-y-2 list-disc pl-5">
                            <li>To provide, operate, and maintain the platform</li>
                            <li>To connect and manage your social media accounts</li>
                            <li>To schedule and publish your content</li>
                            <li>To analyze performance and improve user experience</li>
                            <li>To communicate updates and provide support</li>
                            <li>To enforce our Terms of Service</li>
                        </ul>
                        <p className="mt-2">
                            We do <strong>not</strong> sell your personal data to third parties.
                        </p>
                        </div>

                        <div>
                        <h2 className="text-xl font-semibold mb-2">3. Third-Party Services</h2>
                        <p>
                            We use third-party services (e.g., social media APIs, analytics tools). These tools may have access to limited data to perform their services, but they are not permitted to use it for other purposes.
                        </p>
                        <p className="mt-2">
                            Your use of external platforms is also governed by their respective privacy policies.
                        </p>
                        </div>

                        <div>
                        <h2 className="text-xl font-semibold mb-2">4. Data Sharing and Disclosure</h2>
                        <ul className="flex flex-col space-y-2 list-disc pl-5">
                            <li>With your consent</li>
                            <li>With trusted service providers under confidentiality agreements</li>
                            <li>To comply with legal obligations or enforce rights</li>
                        </ul>
                        </div>

                        <div>
                        <h2 className="text-xl font-semibold mb-2">5. Your Privacy Controls</h2>
                        <ul className="flex flex-col space-y-2 list-disc pl-5">
                            <li>Access your personal information</li>
                            <li>Update or correct your details</li>
                            <li>Delete your account and associated data</li>
                            <li>Withdraw access to connected social accounts at any time</li>
                        </ul>

                        </div>

                        <div>
                        <h2 className="text-xl font-semibold mb-2">6. Data Retention</h2>
                        <p>
                            We retain your information as long as your account is active or as needed to provide the Service. After deletion, some minimal data may be kept for legal or backup purposes.
                        </p>
                        </div>

                        <div>
                        <h2 className="text-xl font-semibold mb-2">7. Security</h2>
                        <p>
                            We use industry-standard security practices (e.g., SSL, OAuth, access controls) to protect your data. However, no online platform is completely secure. Please use Socialitics responsibly.
                        </p>
                        </div>

                        <div>
                        <h2 className="text-xl font-semibold mb-2">8. International Data Transfers</h2>
                        <p>
                            Your information may be stored or processed in other countries. By using the Service, you agree to this transfer.
                        </p>
                        </div>

                        <div>
                        <h2 className="text-xl font-semibold mb-2">9. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy occasionally. We'll notify you of significant changes via email or in-app notifications. Continued use of the Service means you accept the updated policy.
                        </p>
                        </div>

                    </section>
                    </div>
           </div>
    )
}
export default Privacy;
import { useEffect } from "react"
import { useContext } from "react"
import BudgetContext from "../contexts/BudgetContext"

export default function AboutUsPage() {

    const { setShowFilter, showFilter } = useContext(BudgetContext)

    useEffect(() => { setShowFilter(false) }, [])

    return (
        <>
            <div className="container'fluid bg-light">
                <div className="container py-5 min-vh-100">
                    <div className="row">
                        <div className="col-4 text-center">
                            <h5>
                                Scam Rubberduck
                            </h5>
                            <p>
                                Learn more about our <strong>Scam Rubberduck</strong> and how to use it
                            </p>
                        </div>
                        <div className="col-4 text-center">
                            <h5>
                                Privacy
                            </h5>
                            <p>
                                Learn more about how your data will be sold
                            </p>
                        </div>
                        <div className="col-4 text-center">
                            <h5>
                                Contacts
                            </h5>
                            <p>
                                Talk to your <strong>Scam Rubberduck</strong> to get more info about how our scam works
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
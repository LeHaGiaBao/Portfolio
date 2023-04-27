import GitHubCalendar from "react-github-calendar"

const Fade = require('react-reveal/Fade')

export default function GitHub() {
    return (
        <>
            <Fade bottom>
                <section className="p-6">
                    <div className="container w-full p-8 mx-auto space-y-6 rounded-xl shadow-lg bg-gray-100 ng-untouched ng-pristine ng-valid">
                        <div className="container justify-center py-8 mx-auto md:p-8">
                            <GitHubCalendar
                                username="lehagiabao"
                                showWeekdayLabels
                                hideTotalCount
                                hideColorLegend
                                color={'#0096ff'} style={{ color: '#000000', margin: '0 auto' }}
                                fontSize={15}
                                blockSize={25}
                            />
                        </div>
                    </div>
                </section>
            </Fade>
        </>
    )
}
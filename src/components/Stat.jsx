

function Stat() {
  return (
    <div>
        <div className="skeleton bg-zinc-700 stats shadow w-full rounded-none text-white">
  <div className="stat place-items-center">
    <div className="stat-title text-yellow-400">Room Price</div>
    <div className="stat-value">2,000</div>
    <div className="stat-desc text-yellow-400">ค่าห้อง/เดือน</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title text-white">New Rooms</div>
    <div className="stat-value  text-info text-yellow-400">2,500</div>
    <div className="stat-desc text-secondary">↗︎ Complete</div>
  </div>

  <div className="stat place-items-center">
    <div className="stat-title text-yellow-400">Maintanance</div>
    <div className="stat-value text-red-600">500</div>
    <div className="stat-desc text-yellow-400">↘︎ ค่าบำรุงรักษา</div>
  </div>
</div>


    </div>
  )
}

export default Stat
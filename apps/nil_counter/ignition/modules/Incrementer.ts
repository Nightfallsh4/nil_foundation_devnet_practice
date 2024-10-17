import { buildModule } from "@nomicfoundation/hardhat-ignition/modules"

module.exports = buildModule("Incrementer", (m: any) => {
	const incrementer = m.contract("Incrementer")

	return { incrementer }
})

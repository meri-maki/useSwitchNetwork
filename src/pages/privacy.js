import "~/styles/helpers/resetNew.scss"
import "~/styles/ui/index.scss"

import React from "react"
import { createRoot } from "react-dom/client"
import Privacy from "../components/pages/Privacy/Privacy"

const root = createRoot(document.getElementById("page-container"))

root.render(<Privacy />)

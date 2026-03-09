import { useState } from "react"
import Modal from "../ui/Modal"
import Button from "../ui/Button"

export default function FavoriteInspector() {

    const [open, setOpen] = useState(true)

    return (
        <div className="text-center">

            <p className="text-gray-500">
                Leer om Mera te gebruiken!
            </p>

            <Modal open={open} onClose={() => setOpen(false)}>

                <h3 className="text-lg font-semibold mb-3">
                    Zo te zien heb ik het fout!
                </h3>

                <p className="text-sm mb-4">
                    Wat is jouw favoriete gerecht?
                </p>

                <input
                    type="text"
                    placeholder="Typ hier..."
                    className="w-full border rounded-lg p-2 mb-4"
                />

                <div className="flex justify-end gap-2">

                    <Button variant="secondary">
                        Annuleren
                    </Button>

                    <Button>
                        Bewaar antwoord
                    </Button>

                </div>

            </Modal>

        </div>
    )
}
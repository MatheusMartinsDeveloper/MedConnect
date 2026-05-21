import NextConsults from "./NextConsults";
import CardReport from "./CardReport";

export default function ConsultsPatientSection() {
    return (
        <section className="flex justify-center items-center w-full pt-10">
            <div className="flex justify-between gap-5 w-2/3">
                <NextConsults />
                <CardReport
                    patientProfilePicture="/assets/profile_picture.jpeg"
                    patientName="Lucas Ferreira"
                    patientAge="32"
                    patientBloodType="O+"
                    patientAllergies="2"
                    patientMedicines="2"
                />
            </div>
        </section>
    );
}
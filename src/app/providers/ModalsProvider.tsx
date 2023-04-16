'use client';
import EditModal from '@/components/modals/EditModal';
import LoginModal from '../../components/modals/LoginModal';
import RegisterModal from '../../components/modals/RegisterModal';

const ModalsProvider = () => {
  return (
    <>
      <EditModal />
      <RegisterModal />
      <LoginModal />
    </>
  );
};

export default ModalsProvider;
